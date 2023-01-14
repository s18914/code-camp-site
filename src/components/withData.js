function withData(maxSpeakersToShow) {
  return function (Component) {
    const speakers = [
      {imageSrc: "speaker-1124", name: "Douglas Crockford" },
      {imageSrc: "speaker-1530", name: "Douglas Crockford" }
    ];

    return function () {
      const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
      return <Component speakers={limitSpeakers}></Component>;
    };
  }
}

export default withData;