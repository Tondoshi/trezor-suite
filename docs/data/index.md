# Data Analytics

Anonymous[^1] data volunteered by over 250,000 Trezor users directly contributes to improved performance across all the platforms you use Trezor Suite on. 

Participation is easy and completely optional. Enable or disable usage data sharing with one click at any time in Trezor Suite Settings. With full control over what you contribute, you can safely take part in making Bitcoin more secure.   

**TL;DR**
1. Data is only collected with explicit permission.
2. Your sensitive personal data is not shared with us.
3. We use AWS logging for data analytics and Sentry for error tracking.

## What data is collected?

When enabled, purely functional data about how the app is used will be collected and analyzed to find defects and inefficiencies. With explicit consent, both web and desktop applications may collect anonymous data such as what features are used, any errors that occur, hardware specifications and overall user traffic.

If usage data is disabled only the decision not to share any data is recorded. This means we do not collect any data, automated Sentry reports (see below) or any other data. An exception is when a user specifically chooses to submit feedback or bug reports through Trezor Suite.

## How is the data processed?

Data is logged in the form of HTTP requests to an AWS S3 bucket. Those data logs are then transformed into sets which can be analyzed to give meaningful information. See [AWS](aws.md) for more detailed info about the particular events which are tracked.

## Error tracking with Sentry

To catch errors and deliver you the best experience with your Trezor, we use [Sentry.io](https://sentry.io/) for error tracking and performance monitoring. This only applies to users with analytics enabled. See our page about [Sentry](sentry.md) for more information on how it works.


[^1]: "Anonymous" means that we do not collect any sensitive personal information. AWS and Sentry will be able to view your IP address but it is not tracked or collected by Trezor.
