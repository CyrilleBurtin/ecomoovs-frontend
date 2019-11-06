let ip
 if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  { ip = "http://localhost:3000" }
else
  { ip = "https://ecomoovs-back.herokuapp.com" }

export default ip 
