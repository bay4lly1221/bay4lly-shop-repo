/**
 * Bay4lly Shop - Example Plugin
 * 
 * This is a sample plugin to demonstrate how to create
 * a Blockbench plugin compatible with Bay4lly Shop.
 */

Plugin.register('example_plugin', {
  title: 'Example Plugin',
  author: 'Bay4lly',
  description: 'A sample plugin to demonstrate Bay4lly Shop functionality.',
  icon: 'icon',
  version: '1.0.0',
  min_version: '4.0.0',
  
  onload() {
    // Create a menu item
    new Menu('Bay4lly Example', [
      {
        name: 'Say Hello',
        icon: 'info',
        click: function() {
          Blockbench.notification.notify({
            icon: 'info',
            title: 'Example Plugin',
            message: 'Hello from Bay4lly Shop Example Plugin!'
          });
        }
      },
      {
        name: 'Open Documentation',
        icon: 'open_in_new',
        click: function() {
          window.open('https://www.blockbench.net', '_blank');
        }
      }
    ]).open(event);
  },
  
  onunload() {
    // Cleanup code here if needed
    console.log('Example Plugin unloaded');
  }
});
