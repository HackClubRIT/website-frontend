<script>
  import Button from "./Button.svelte";

  export let content;
</script>

<div class="modal-backdrop" />
<div class="modal">
  <div class="modal__content">
    {content}
  </div>
  <div class="modal__footer">
    <Button caption="close" />
  </div>
</div>

<style>
  .modal {
    position: fixed;
    z-index: 100;
    background: white;
    border-radius: 10px;
    width: 80%;
    top: 30vh;
    left: 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    display: none;
  }
  
  .modal.visible {
    display: block;
    animation: fade-slide-in 0.3s ease-out forwards;
  }

  .modal-backdrop {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
    pointer-events: none;
    display: none;
  }

  .backdrop.visible {
    display: block;
    pointer-events: all;
  }

</style>
