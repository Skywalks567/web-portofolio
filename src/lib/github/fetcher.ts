// GraphQL query for GitHub contributions within a date range
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const query = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        contributionCalendar {
          totalContributions
        }
        commitContributionsByRepository(maxRepositories: 100) {
          repository {
            nameWithOwner
          }
          contributions {
            totalCount
          }
        }
        pullRequestContributions(first: 20) {
          nodes {
            occurredAt
            pullRequest {
              title
              url
              bodyText
              createdAt
              state
              additions
              deletions
              comments {
                totalCount
              }
              repository {
                nameWithOwner
              }
            }
          }
        }
        repositoryContributions(first: 20) {
          nodes {
            occurredAt
            repository {
              name
              nameWithOwner
              url
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches the last 1 month of GitHub contribution data via GraphQL API.
 */
export async function fetchGitHubData(username: string, token: string) {
  const to = new Date();
  const from = new Date();

  // Only fetch events from the last 1 month so logs stay short.
  from.setMonth(to.getMonth() - 1);

  const response = await fetch(GITHUB_GRAPHQL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(
      `GitHub GraphQL API error: ${response.status} - ${errText}`,
    );
  }

  const { data, errors } = await response.json();

  if (errors && errors.length > 0) {
    throw new Error(errors[0].message || 'GraphQL Query error');
  }

  return data;
}
