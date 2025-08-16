# Resume Website - Vercel Deployment

This is a personal resume website that has been converted from Azure Functions to Vercel for deployment.

## Project Structure

```
├── public/           # Static website files (HTML, CSS, JS)
├── api/              # Vercel API routes
│   └── counter.js    # Visit counter API endpoint
├── vercel.json       # Vercel configuration
├── package.json      # Project dependencies
└── deploy.sh         # Deployment script
```

## Features

- Responsive resume website
- Visit counter functionality
- Modern UI with animations
- Skills showcase
- Contact information

## Deployment to Vercel

### Prerequisites

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Make sure you have a Vercel account (sign up at [vercel.com](https://vercel.com))

### Deployment Steps

1. **Login to Vercel** (if not already logged in):
```bash
vercel login
```

2. **Deploy the project**:
```bash
vercel
```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name (e.g., "resume-website")
   - Confirm deployment settings

4. **For production deployment**:
```bash
vercel --prod
```

### Alternative: GitHub Integration

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the repository in Vercel dashboard
4. Vercel will automatically deploy on every push

## Local Development

1. **Install dependencies**:
```bash
npm install
```

2. **Run locally**:
```bash
vercel dev
```

3. **Open in browser**:
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api/counter

## API Endpoints

- `GET /api/counter` - Returns the current visit count and increments it
- `POST /api/counter` - Same as GET, increments the visit count

## Environment Variables

No environment variables are required for basic functionality. The visit counter uses local file storage.

## Customization

### Update Personal Information
Edit the following files:
- `frontend/index.html` - Main content and personal details
- `frontend/css/` - Styling and layout
- `frontend/js/` - Interactive features

### Modify Counter Logic
Edit `api/counter.js` to change how the visit counter works.

## Troubleshooting

### Common Issues

1. **API not working**: Check that the API route is properly configured in `vercel.json`
2. **Counter not updating**: Ensure the `/data` directory has write permissions
3. **Styling issues**: Verify all CSS files are properly linked in `index.html`

### Vercel Deployment Issues

1. **Build errors**: Check the Vercel deployment logs
2. **404 errors**: Verify the routing configuration in `vercel.json`
3. **CORS issues**: The API already includes CORS headers

## Support

For Vercel-specific issues, refer to the [Vercel documentation](https://vercel.com/docs).

## License

ISC License
