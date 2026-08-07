import { fetchGitHubData } from '@/lib/github/fetcher';
import { processGitHubData } from '@/lib/github/processor';
import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache the response for 1 hour

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const username = 'Skywalks567';

    if (!token) {
      return NextResponse.json(
        { error: 'GitHub access token is not configured.' },
        { status: 500 },
      );
    }

    const rawData = await fetchGitHubData(username, token);
    const collection = rawData?.user?.contributionsCollection;

    if (!collection) {
      return NextResponse.json(
        { error: 'User contribution data not found.' },
        { status: 404 },
      );
    }

    const totalContributions =
      collection.contributionCalendar?.totalContributions || 0;
    const activities = processGitHubData(collection);

    return NextResponse.json({ totalContributions, activities });
  } catch (error) {
    console.error('API GET Error:', error);
    return NextResponse.json(
      { error: 'Internal system error fetching GitHub logs.' },
      { status: 500 },
    );
  }
}
