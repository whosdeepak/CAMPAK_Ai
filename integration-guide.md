# CAMPAK Bot Integration Guide

## Method 1: Simple Script Integration (Recommended)

Add this single line to your website's HTML, preferably before the closing `</body>` tag:

```html
<script src="https://your-domain.com/campak-bot.js"></script>
```

The chatbot will automatically appear as a floating widget in the bottom-right corner.

## Method 2: Custom Container Integration

If you want to place the chatbot in a specific container:

```html
<div id="my-chatbot-container"></div>
<script src="https://your-domain.com/campak-bot.js"></script>
<script>
  initCampakBot('my-chatbot-container');
</script>
```

## Method 3: React Component Integration

If your website is built with React, you can directly import and use the components:

```jsx
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div>
      {/* Your existing content */}
      <ChatWidget />
    </div>
  );
}
```

## Method 4: WordPress Integration

1. Upload the `campak-bot.js` file to your WordPress media library
2. Add this code to your theme's `footer.php` or use a plugin like "Insert Headers and Footers":

```html
<script src="/wp-content/uploads/campak-bot.js"></script>
```

## Method 5: Shopify Integration

1. Go to Online Store > Themes > Actions > Edit Code
2. Open `theme.liquid`
3. Add before `</body>`:

```html
<script src="https://your-domain.com/campak-bot.js"></script>
```

## Customization Options

You can customize the widget appearance by adding CSS:

```css
/* Hide the widget on mobile */
@media (max-width: 768px) {
  #campak-bot-widget {
    display: none;
  }
}

/* Change widget position */
#campak-bot-widget {
  bottom: 20px !important;
  right: 20px !important;
}
```

## Features

- ✅ Responsive design
- ✅ Mobile-friendly
- ✅ Easy integration
- ✅ No dependencies required
- ✅ Lightweight (~50KB gzipped)
- ✅ Works with any website
- ✅ Customizable appearance

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Deployment Steps

1. Build the project: `npm run build`
2. Upload the generated `campak-bot.js` file to your server
3. Add the script tag to your website
4. Test the integration

## Support

For integration support, contact: panditdeepak197@gmail.com