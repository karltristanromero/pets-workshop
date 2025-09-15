<!-- A theme selector component that allows users to switch between different visual themes -->
<script>
  import { onMount } from 'svelte';
  
  const themes = [
    { id: 'default', name: 'Default', icon: '🎨' },
    { id: 'theme-retro', name: '80s Retro', icon: '🕹️' },
    { id: 'terminal', name: 'Terminal Classic', icon: '💻' },
    { id: 'hand-sketched', name: 'Hand-Sketched', icon: '✏️' },
    { id: 'steampunk', name: 'Steampunk', icon: '⚙️' },
    { id: 'fantasy', name: 'Fantasy Realm', icon: '🧙' }
  ];

  let selectedTheme = 'default';

  onMount(() => {
    // Load saved theme from localStorage if available
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      selectedTheme = savedTheme;
      applyTheme(savedTheme);
    }
  });

  function applyTheme(themeId) {
    document.documentElement.className = themeId;
    localStorage.setItem('selectedTheme', themeId);
  }

  function handleThemeChange(event) {
    selectedTheme = event.target.value;
    applyTheme(selectedTheme);
  }
</script>

<div class="fixed top-4 right-4 z-50">
  <select
    class="bg-white dark:bg-slate-800 bg-opacity-80 backdrop-blur-sm rounded-lg px-4 py-2 text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 cursor-pointer appearance-none"
    value={selectedTheme}
    on:change={handleThemeChange}
    aria-label="Select theme"
  >
    {#each themes as theme}
      <option value={theme.id}>{theme.icon} {theme.name}</option>
    {/each}
  </select>
</div>

<style>
  select {
    transition: all 0.3s ease;
  }

  select:hover {
    transform: scale(1.05);
  }

  /* Theme-specific styles for the dropdown */
  :global(.default) select {
    @apply bg-slate-700 text-slate-100 border-slate-500;
  }

  :global(.theme-retro) select {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    @apply text-black border-pink-500;
  }

  :global(.terminal) select {
    @apply bg-black text-green-500 border-green-500 font-mono;
  }

  :global(.hand-sketched) select {
    @apply bg-white text-slate-800 border-slate-400;
    font-family: 'Comic Sans MS', cursive;
  }

  :global(.steampunk) select {
    background: linear-gradient(45deg, #8b4513, #d4af37);
    @apply text-white border-yellow-700;
  }

  :global(.fantasy) select {
    background: linear-gradient(45deg, #4b0082, #9400d3);
    @apply text-white border-purple-300;
  }
</style>