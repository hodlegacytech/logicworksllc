<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Contact Request</title>
</head>
<body style="font-family: Arial, sans-serif; color: #1a1a2e; line-height: 1.6; margin: 0; padding: 24px; background: #f5f7fb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e9f2;">
    <tr>
      <td style="padding: 28px 32px; background: linear-gradient(135deg, #0d1b3e 0%, #1a4bdb 100%); color: #ffffff;">
        <h1 style="margin: 0 0 8px; font-size: 24px;">New Contact Request</h1>
        <p style="margin: 0; opacity: 0.85;">LogicWorksLLC website contact form</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; width: 160px; font-weight: 700;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">{{ $submission['name'] }}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; font-weight: 700;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">
              <a href="mailto:{{ $submission['email'] }}">{{ $submission['email'] }}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; font-weight: 700;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">{{ $submission['phone'] ?: '—' }}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; font-weight: 700;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">{{ $submission['company'] ?: '—' }}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; font-weight: 700;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">{{ $submission['service'] }}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6; font-weight: 700;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eef1f6;">{{ $submission['budget'] ?: '—' }}</td>
          </tr>
        </table>

        <h2 style="margin: 24px 0 12px; font-size: 16px;">Project Details</h2>
        <div style="padding: 16px; background: #f8faff; border-radius: 8px; border: 1px solid #e5e9f2; white-space: pre-wrap;">{{ $submission['message'] }}</div>

        <p style="margin: 24px 0 0; font-size: 13px; color: #6b7280;">
          Reply directly to this email to respond to {{ $submission['name'] }}.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
