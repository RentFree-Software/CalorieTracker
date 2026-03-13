<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Support from './Support.vue';

const props = defineProps({
  trackedFoods: {
    type: Array,
    required: true
  }
});

const emit = defineEmits([
  'manage-foods',
  'clear-tracked-foods',
  'save-tracking',
  'show-history',
  'about',
  'export-foods',
  'import-foods',
  'export-history',
  'import-history',
  'show-undo-deletions'
]);

const menuOpen = ref(false);
const trackingsMenuOpen = ref(false);
const dataMenuOpen = ref(false);
const supportDialogOpen = ref(false);
const fileInputFoods = ref(null);
const fileInputHistory = ref(null);

function closeSubmenus() {
  trackingsMenuOpen.value = false;
  dataMenuOpen.value = false;
}

function handleClickOutside(event) {
  // Check if click is inside any menu-item-with-submenu element
  const clickedInsideSubmenu = event.target.closest('.menu-item-with-submenu');
  
  if (!clickedInsideSubmenu) {
    closeSubmenus();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

function handleManageFoods() {
  emit('manage-foods');
  menuOpen.value = false;
}

function handleClearTrackedFoods() {
  emit('clear-tracked-foods');
  menuOpen.value = false;
}

function toggleTrackingsMenu() {
  dataMenuOpen.value = false;
  trackingsMenuOpen.value = !trackingsMenuOpen.value;
}

function handleSaveTracking() {
  emit('save-tracking');
  trackingsMenuOpen.value = false;
  menuOpen.value = false;
}

function handleShowHistory() {
  emit('show-history');
  trackingsMenuOpen.value = false;
  menuOpen.value = false;
}

function handleAbout() {
  emit('about');
  menuOpen.value = false;
}

function handleSupport() {
  supportDialogOpen.value = true;
  menuOpen.value = false;
}

function closeSupportDialog() {
  supportDialogOpen.value = false;
}

function toggleDataMenu() {
  trackingsMenuOpen.value = false;
  dataMenuOpen.value = !dataMenuOpen.value;
}

function handleExportFoods() {
  emit('export-foods');
  dataMenuOpen.value = false;
  menuOpen.value = false;
}

function handleExportHistory() {
  emit('export-history');
  dataMenuOpen.value = false;
  menuOpen.value = false;
}

function handleShowUndoDeletions() {
  emit('show-undo-deletions');
  dataMenuOpen.value = false;
  menuOpen.value = false;
}

function handleImportFoods() {
  fileInputFoods.value?.click();
  dataMenuOpen.value = false;
  menuOpen.value = false;
}

function handleImportHistory() {
  fileInputHistory.value?.click();
  dataMenuOpen.value = false;
  menuOpen.value = false;
}

function onFoodsFileSelected(event) {
  const file = event.target.files?.[0];
  if (file) {
    emit('import-foods', file);
  }
  if (fileInputFoods.value) {
    fileInputFoods.value.value = '';
  }
}

function onHistoryFileSelected(event) {
  const file = event.target.files?.[0];
  if (file) {
    emit('import-history', file);
  }
  if (fileInputHistory.value) {
    fileInputHistory.value.value = '';
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  trackingsMenuOpen.value = false;
  dataMenuOpen.value = false;
}

function closeMenu() {
  menuOpen.value = false;
  trackingsMenuOpen.value = false;
  dataMenuOpen.value = false;
}
</script>

<template>
  <div class="menu-container">
    <!-- Desktop Banner Menu (width > 1000px) -->
    <nav class="banner-menu" aria-label="Main navigation">
      <button class="menu-button" @click="handleManageFoods" aria-label="Manage food items">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
        Manage Fooditems
      </button>
      <button class="menu-button" @click="handleClearTrackedFoods" aria-label="Clear today's registrations">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 6h18"></path>
          <path d="M8 6V4h8v2"></path>
          <path d="M19 6l-1 14H6L5 6"></path>
          <path d="M10 11v6"></path>
          <path d="M14 11v6"></path>
        </svg>
        Clear Trackedfoods
      </button>
      <div class="menu-item-with-submenu">
        <button class="menu-button" @click="toggleTrackingsMenu" :aria-expanded="trackingsMenuOpen" aria-label="Trackings menu">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 17l6-6 4 4 8-8"></path>
            <path d="M14 7h7v7"></path>
          </svg>
          Trackings
          <svg class="chevron-icon" :class="{ open: trackingsMenuOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div v-if="trackingsMenuOpen" class="submenu">
          <button class="submenu-button" @click="handleSaveTracking" aria-label="Save current tracking">
            Save current
          </button>
          <button class="submenu-button" @click="handleShowHistory" aria-label="See tracking history">
            See history
          </button>
        </div>
      </div>
      <div class="menu-item-with-submenu">
        <button class="menu-button" @click="toggleDataMenu" :aria-expanded="dataMenuOpen" aria-label="Data menu">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          Data
          <svg class="chevron-icon" :class="{ open: dataMenuOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div v-if="dataMenuOpen" class="submenu">
          <button class="submenu-button" @click="handleShowUndoDeletions" aria-label="Undo deletions">
            Undo deletions
          </button>
          <button class="submenu-button" @click="handleExportFoods" aria-label="Export added foods">
            Export added foods
          </button>
          <button class="submenu-button" @click="handleImportFoods" aria-label="Import foods">
            Import foods
          </button>
          <button class="submenu-button" @click="handleExportHistory" aria-label="Export tracking history">
            Export tracking history
          </button>
          <button class="submenu-button" @click="handleImportHistory" aria-label="Import tracking history">
            Import tracking history
          </button>
        </div>
      </div>
      <button class="menu-button" @click="handleAbout" aria-label="About">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <path d="M12 17v.01"></path>
        </svg>
        About
      </button>
      <button class="menu-button" @click="handleSupport" aria-label="Support">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        Support
      </button>
    </nav>

    <!-- Mobile Hamburger Menu (width <= 1000px) -->
    <div class="hamburger-menu">
      <button 
        class="hamburger-btn" 
        @click="toggleMenu" 
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
      >
        <svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <!-- Slide-out Menu -->
      <div v-if="menuOpen" class="menu-overlay" @click="closeMenu" aria-hidden="true"></div>

      <nav v-if="menuOpen" class="slide-out-menu" aria-label="Mobile navigation">
          <button class="menu-button" @click="handleManageFoods" aria-label="Manage food items">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Manage Fooditems
          </button>
          <button class="menu-button" @click="handleClearTrackedFoods" aria-label="Clear today's registrations">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
            </svg>
            Clear Trackedfoods
          </button>
          <div class="menu-item-with-submenu">
            <button class="menu-button" @click="toggleTrackingsMenu" :aria-expanded="trackingsMenuOpen" aria-label="Trackings menu">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 17l6-6 4 4 8-8"></path>
                <path d="M14 7h7v7"></path>
              </svg>
              Trackings
              <svg class="chevron-icon" :class="{ open: trackingsMenuOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-if="trackingsMenuOpen" class="submenu mobile-submenu">
              <button class="submenu-button" @click="handleSaveTracking" aria-label="Save current tracking">
                Save current
              </button>
              <button class="submenu-button" @click="handleShowHistory" aria-label="See tracking history">
                See history
              </button>
            </div>
          </div>
          <div class="menu-item-with-submenu">
            <button class="menu-button" @click="toggleDataMenu" :aria-expanded="dataMenuOpen" aria-label="Data menu">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              Data
              <svg class="chevron-icon" :class="{ open: dataMenuOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-if="dataMenuOpen" class="submenu mobile-submenu">
              <button class="submenu-button" @click="handleShowUndoDeletions" aria-label="Undo deletions">
                Undo deletions
              </button>
              <button class="submenu-button" @click="handleExportFoods" aria-label="Export added foods">
                Export added foods
              </button>
              <button class="submenu-button" @click="handleImportFoods" aria-label="Import foods">
                Import foods
              </button>
              <button class="submenu-button" @click="handleExportHistory" aria-label="Export tracking history">
                Export tracking history
              </button>
              <button class="submenu-button" @click="handleImportHistory" aria-label="Import tracking history">
                Import tracking history
              </button>
            </div>
          </div>
          <button class="menu-button" @click="handleAbout" aria-label="About">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17v.01"></path>
            </svg>
            About
          </button>
          <button class="menu-button" @click="handleSupport" aria-label="Support">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Support
          </button>
        </nav>
    </div>

    <Support
      v-if="supportDialogOpen"
      @close="closeSupportDialog"
    />

    <!-- Hidden file input for importing -->
    <input
      ref="fileInputFoods"
      type="file"
      accept=".json"
      style="display: none"
      @change="onFoodsFileSelected"
      aria-label="Import foods from JSON file"
    />
    <input
      ref="fileInputHistory"
      type="file"
      accept=".json"
      style="display: none"
      @change="onHistoryFileSelected"
      aria-label="Import tracking history from JSON file"
    />
  </div>
</template>

<style scoped>
.menu-container {
  width: 100%;
}

/* Desktop Banner Menu */
.banner-menu {
  display: none;
  gap: 8px;
  padding: 12px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
  justify-content: center;
}



/* Mobile Hamburger Menu */
.hamburger-menu {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
}



.hamburger-btn {
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
  border-radius: 40px;
  background-color: transparent;
}

.hamburger-btn:hover {
  background-color: var(--surface-alt-color);
}

.hamburger-icon {
  width: 24px;
  height: 24px;
  stroke: var(--text-color);
}

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-color);
  z-index: 2;
}

/* Slide-out Menu */
.slide-out-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--surface-color);
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 60px 0 20px 0;
  z-index: 2;
  box-shadow: 2px 0 8px var(--shadow-color);
  overflow-y: auto;
}

/* Menu Buttons */
.menu-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background-color: transparent;
  white-space: nowrap;
}

.banner-menu .menu-button {
  padding: 8px 14px;
  border-radius: 6px;
}

.banner-menu .menu-button:hover {
  background-color: var(--surface-alt-color);
}

.slide-out-menu .menu-button {
  width: 100%;
  border-radius: 0;
  justify-content: flex-start;
}

.slide-out-menu .menu-button:hover {
  background-color: var(--surface-alt-color);
}

.icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--text-color);
}

.chevron-icon {
  width: 16px;
  height: 16px;
  margin-left: auto;
  transition: transform 0.2s;
}

.chevron-icon.open {
  transform: rotate(180deg);
}

.menu-item-with-submenu {
  position: relative;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  box-shadow: 0 4px 12px var(--shadow-color);
  min-width: 160px;
  z-index: 10;
  margin-top: 4px;
}

.submenu-button {
  display: block;
  width: 100%;
  padding: 10px 16px;
  background: transparent;
  border: none;
  text-align: left;
  color: var(--text-color);
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.submenu-button:first-child {
  border-radius: 6px 6px 0 0;
}

.submenu-button:last-child {
  border-radius: 0 0 6px 6px;
}

.mobile-submenu {
  position: static;
  margin-top: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding-left: 20px;
}

.mobile-submenu .submenu-button {
  padding: 8px 16px;
  font-size: 13px;
}

.mobile-submenu .submenu-button:first-child,
.mobile-submenu .submenu-button:last-child {
  border-radius: 0;
}

@media (min-width: 1000px) {
  .banner-menu {
    display: flex;
  }
  .hamburger-menu {
    display: none;
  }
}


</style>
