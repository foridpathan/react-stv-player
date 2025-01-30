import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const SyntaxHighlightedContent = ({
    language,
    content,
}: {
    language: string;
    content: string;
}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(content);
    };

    return (
        <div className="relative w-full">
            <SyntaxHighlighter
                language={language}
                style={a11yDark}
                customStyle={{ margin: "0", fontSize: "0.8em", padding:10, borderRadius: 5 }}
                
            >
                {content}
            </SyntaxHighlighter>
            <div className="absolute top-1 right-1" onClick={handleCopy} >Copy</div>
        </div>
    );
};