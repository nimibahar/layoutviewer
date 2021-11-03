import ReactHtmlParser from "react-html-parser";

export default function Html({ htmlString }) {
  const options = {
    decodeEntities: true,
  };

  return <>{ReactHtmlParser(htmlString, options)}</>
}