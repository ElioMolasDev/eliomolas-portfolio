import Marquee from "../magicui/marquee";
import { Icon } from "@iconify/react";

const LogoMarquee = () => {
  return (
    <div className="h-36 overflow-hidden md:hidden">
      <div className="w-28 h-48 absolute z-20 -mt-1"></div>

      <div className="flex gap-1">
        <Marquee vertical="true" className="[--duration:15s]">
          <Icon icon="vscode-icons:file-type-html" width={32} />
          <Icon icon="devicon:css3" width={32} />
          <Icon icon="logos:react" width={32} />
          <Icon icon="logos:tailwindcss-icon" width={32} />
          <Icon icon="devicon--nodejs-wordmark" width={32} />
          <Icon icon="vscode-icons:file-type-sql" width={32} />
          <Icon icon="devicon:mongodb-wordmark" width={32} />          
          <Icon icon="simple-icons:express" width={32} />
          <Icon icon="logos:spring-icon" width={32} />
          <Icon icon="skill-icons:docker" width={32} />
        </Marquee>

        <Marquee
          vertical="true"
          reverse="true"
          className="[--duration:15s] [--gap:0.8em]"
        >
          <Icon icon="vscode-icons:file-type-c" width={32} />
          <Icon icon="vscode-icons:file-type-python" width={32} />
          <Icon icon="vscode-icons:file-type-java" width={32} />
          <Icon
            icon="fa6-brands:square-js"
            width={32}
            style={{ color: "#eeff00" }}
          />
          <Icon icon="vscode-icons:file-type-git" width={32} />
          <Icon icon="bytesize:github" width={32} />
          <Icon icon="vscode-icons:file-type-vscode" width={32} />
          <Icon icon="logos:fedora" width={32} />
          <Icon icon="logos:eclipse" width={32} />
          <Icon icon="bytesize:nvim" width={32} />
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
