<script setup>
import { computed } from 'vue';

const props = defineProps({
  deletions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['close', 'undo']);

const hasDeletions = computed(() => props.deletions.length > 0);

function handleClose() {
  emit('close');
}

function handleUndo(entryId) {
  emit('undo', entryId);
}
</script>

<template>
  <div class="undo-overlay" role="dialog" aria-modal="true" aria-labelledby="undo-dialog-title">
    <section class="undo-container">
      <header class="undo-header">
        <h2 id="undo-dialog-title">Undo Deletions</h2>
        <button class="close-btn" @click="handleClose" aria-label="Close undo deletions dialog">&times;</button>
      </header>

      <div v-if="!hasDeletions" class="no-deletions" role="status">
        No deletions to undo.
      </div>

      <div v-else class="undo-table-wrapper">
        <table class="undo-table" aria-label="Deletion history">
          <thead>
            <tr>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in deletions" :key="entry.id">
              <td>{{ entry.description }}</td>
              <td>
                <button class="undo-btn" @click="handleUndo(entry.id)">Undo</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.undo-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--overlay-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
}

.undo-container {
  width: min(800px, 100%);
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow-color);
  padding: 20px;
  margin: 16px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.undo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.undo-header h2 {
  margin: 0;
}

.no-deletions {
  padding: 24px;
  text-align: center;
  color: var(--text-muted-color);
}

.undo-table-wrapper {
  overflow-y: auto;
}

.undo-table {
  width: 100%;
  border-collapse: collapse;
}

.undo-table th,
.undo-table td {
  text-align: left;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-color);
}

.undo-btn {
  padding: 6px 12px;
  border-radius: 6px;
  background-color: var(--surface-alt-color);
}

.undo-btn:hover {
  background-color: var(--table-row-hover);
}
</style>
