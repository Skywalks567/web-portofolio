export function generateContactEmailHtml(
  name: string,
  email: string,
  message: string,
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .terminal-card {
            background-color: #050505;
            color: #00ff00;
            font-family: 'Courier New', Courier, monospace;
            padding: 30px;
            border: 1px solid #004400;
            border-radius: 8px;
            max-width: 600px;
            line-height: 1.6;
          }
          .header {
            border-bottom: 1px solid #004400;
            padding-bottom: 15px;
            margin-bottom: 25px;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 2px;
          }
          .label {
            color: #008800;
            text-transform: uppercase;
            font-size: 12px;
            display: block;
            margin-bottom: 4px;
            letter-spacing: 1px;
          }
          .content {
            margin-bottom: 20px;
          }
          .message-box {
            background-color: #0a0a0a;
            border-left: 3px solid #00ff00;
            padding: 15px;
            margin-top: 10px;
            color: #ffffff;
            white-space: pre-wrap;
          }
          .footer {
            font-size: 10px;
            color: #004400;
            margin-top: 40px;
            text-align: center;
            border-top: 1px solid #001100;
            padding-top: 10px;
          }
          .glow {
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          }
        </style>
      </head>
      <body>
        <div class="terminal-card">
          <div class="header glow">> NEW_TRANSMISSION_RECEIVED</div>
          
          <div class="content">
            <span class="label">SENDER_NAME</span>
            <div style="font-size: 18px;">${name}</div>
          </div>

          <div class="content">
            <span class="label">REPLY_TO</span>
            <div style="color: #00cc00;">${email}</div>
          </div>

          <div class="content">
            <span class="label">PAYLOAD_MESSAGE</span>
            <div class="message-box">${message}</div>
          </div>

          <div class="footer">
            [SYSTEM_INFO]: SECURE_CHANNEL_ESTABLISHED | PORTOFOLIO_V2.0
          </div>
        </div>
      </body>
    </html>
  `;
}
