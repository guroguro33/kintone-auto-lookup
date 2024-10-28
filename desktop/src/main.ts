import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#desktop-root')

kintone.events.on('app.record.index.show', (event) => {
  const mountTarget = document.getElementById('desktop-root')
  if (!mountTarget) return event
  createApp(App, { records: event.records }).mount(mountTarget)
})
