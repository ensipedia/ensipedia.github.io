<script>
  export let message;
  export let containerColor = "var(--m3c-surface-container-low)";
  export let contentColor = "var(--m3c-on-surface)";
</script>

<div style:text-align="left" style:display="flex" style:background={containerColor}>
  <img src={message.avatar} style:height="40px" style:width="40px" style:border-radius="50%">
  <div style:margin-left="8px">
    <div style:font-size="16px">
      <b style:vertical-align="middle">{message.author}</b>
      <font style:margin-left="4px" style:vertical-align="middle" style:font-size="11px" style:opacity="50%">{message.date}</font>
    </div>
    <div style:font-size="15px">{message.content}</div>
  </div>
</div>