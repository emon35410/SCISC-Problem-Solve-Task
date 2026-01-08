const pingPong = () => {
  for (let i = 1; i <= 20; i++) {
    console.log(i % 15 === 0 ? "PingPong" : i % 3 === 0 ? "Ping" : i % 5 === 0 ? "Pong" : i);
  }
};

pingPong();
