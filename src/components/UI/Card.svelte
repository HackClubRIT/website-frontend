<script>
  export let name;
  export let email;
  export let data;
  export let status ;
</script>

<div class="container">
  <div class="bg-dark">
    <div class="p-4 text-cyan text-base">
      {name}
    </div>
    <div class="p-4 text-snow text-base">
      <li class="p-2">Email id : <br /> {email}</li>
      <li class="p-2">Contact No: <br /> {data.contactno}</li>
      <li class="p-2">Department: <br /> {data.dept}</li>
      <li class="p-2">Year : <br /> {data.year}</li>
      <li class="p-2">Github Lik: <br /> {data.github}</li>
      {#if data.q1}
        <li class="p-2">
          q1: <br />
          {data.q1}
        </li>
      {/if}
      {#if data.q2}
        <li class="p-2">
          q2: <br />
          {data.q2}
        </li>
      {/if}{#if data.q3}
        <li class="p-2">
          q3: <br />
          {data.q3}
        </li>
      {/if}{#if data.q4}
        <li class="p-2">
          q4: <br />
          {data.q4}
        </li>
      {/if}
      <li class="p-2">Status: <br /> {status}</li>
    </div>
  </div>
</div>
