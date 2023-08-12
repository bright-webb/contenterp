// src/includePartial.js
export async function include(file, containerId) {
    try {
      const response = await fetch(file);
      const html = await response.text();
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = html;
      }
    } catch (error) {
      console.error("Error including HTML partial:", error);
    }
  }
  