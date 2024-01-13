function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === "r") {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}
