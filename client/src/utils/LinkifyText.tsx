const LinkifyText = (inputText: string) => {
  const urlPattern = /(www.[^\s]+)/g;
  return inputText.split(urlPattern).map((text: string, index: number) =>
    urlPattern.test(text) ? (
      <a
        key={index}
        href={`https://${text}`}
        target='_blank'
        rel='noopener noreferrer'
        className='font-semibold underline'
      >
        {text}
      </a>
    ) : (
      <span key={index}>{text}</span>
    )
  );
};

export default LinkifyText;
