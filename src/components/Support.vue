<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);
const oneTimeAmount = ref('5');
const paypalMeUsername = 'your-paypal-username';

function handleOneTimeSponsor() {
  const amount = Number.parseFloat(String(oneTimeAmount.value).replace(',', '.'));
  const safeAmount = Number.isNaN(amount) ? 5 : amount;
  const paypalUrl = `https://www.paypal.com/paypalme/${paypalMeUsername}/${safeAmount}`;
  window.open(paypalUrl, '_blank');
}

function handleGitHubSponsor() {
  // Open GitHub Sponsors in a new tab
  window.open('https://github.com/sponsors', '_blank');
}

function closeDialog() {
  emit('close');
}
</script>

<template>
  <div
    class="support-dialog-overlay"
    @click.self="closeDialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="support-dialog-title"
  >
    <div class="support-dialog">
      <h3 id="support-dialog-title">Support</h3>
      <p>If you want to support this and other projects, you can do this in two ways.</p>
      <p>Donate directly using github sponsor.</p>
      <button type="button" class="support-action-btn" @click="handleGitHubSponsor">Donate with GitHub Sponsor</button>

      <p>Or make a one-time sponsor payment with PayPal.</p>
      <div class="one-time-row">
        <label for="one-time-amount" class="one-time-label">Amount</label>
        <input
          id="one-time-amount"
          v-model="oneTimeAmount"
          type="text"
          inputmode="decimal"
          class="one-time-input"
          placeholder="5"
          aria-label="One-time sponsor amount in USD"
        />
      </div>
      <button type="button" class="support-action-btn" @click="handleOneTimeSponsor">One-time sponsor</button>

      <p>Anyways thanks for your support, and glad that you like it</p>
      <button type="button" class="support-close-btn" @click="closeDialog">Close</button>
    </div>
  </div>
</template>

<style scoped>
.support-dialog-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--overlay-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1200;
}

.support-dialog {
  width: min(560px, 100%);
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow-color);
  padding: 20px;
}

.support-dialog h3 {
  margin-top: 0;
}

.support-dialog p {
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.support-action-btn {
  width: 100%;
  margin-bottom: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: var(--surface-alt-color);
}

.support-action-btn:hover {
  background-color: var(--table-row-hover);
}

.support-close-btn {
  margin-top: 6px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: var(--secondary-color);
  color: white;
}

.support-close-btn:hover {
  background-color: var(--secondary-hover-color);
}

.one-time-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
}

.one-time-label {
  min-width: 60px;
}

.one-time-input {
  width: 100%;
}
</style>
