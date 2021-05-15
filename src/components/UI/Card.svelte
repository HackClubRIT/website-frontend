<script>
  import { q1, q2, q3, q4 } from "../Helpers/constants";
  export let email;
  export let data;
  export let status;
</script>

<div class="container">
  <div class="p-4 text-cyan text-base">Email</div>
  <div class="pb-4 text-snow text-base">
    <li>{email}</li>
  </div>
  <div class="p-4 text-cyan text-base">Contact Number</div>
  <div class="pb-4 text-snow text-base">
    <li>{data.contactno}</li>
  </div>
  <div class="p-4 text-cyan text-base">Department</div>
  <div class="pb-4 text-snow text-base">
    <li>{data.dept}</li>
  </div>
  <div class="p-4 text-cyan text-base">Year</div>
  <div class="pb-4 text-snow text-base">
    <li>{data.year}</li>
  </div>
  <div class="p-4 text-cyan text-base">Github</div>
  <div class="pb-4 text-snow text-base">
    <li>{data.github}</li>
  </div>
  <div class="p-4 text-cyan text-base">{q1}</div>
  {#if data.q1}
    <li>
      {data.q1}
    </li>
  {/if}
  <div class="p-4 text-cyan text-base">{q2}</div>
  {#if data.q2}
    <li>
      {data.q2}
    </li>
  {/if}
  <div class="p-4 text-cyan text-base">{q3}</div>
  {#if data.q3}
    <li>
      {data.q3}
    </li>
  {/if}
  <div class="p-4 text-cyan text-base">{q4}</div>
  {#if data.q4}
    <li>
      {data.q4}
    </li>
  {/if}
  <div class="p-4 text-cyan text-base">Status</div>
  <div class="pb-4 text-snow text-base">
    <li>{status}</li>
  </div>
</div>
