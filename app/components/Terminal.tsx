import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";

const Terminal = () => {
  const [terminalRes, setTerminalRes] = useState<Array<string>>([""]);
  const terminalName = "wenbin@portfolio %";
  const navigate = useNavigate();

  const onCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const idx = terminalRes.length - 1;
      const oldInput = document.getElementById(
        `command${idx}`
      ) as HTMLInputElement;
      oldInput.blur();
      oldInput.disabled = true;
      const inputValue = oldInput.value;
      let response = "";
      switch (inputValue) {
        case "git":
          response = "See 'git --help'.";
          break;
        case "git --help":
          response =
            "git [checkout] [help] [branch]\nAdd a -h flag to see more subcommands.";
          break;
        case "git branch":
        case "git branch -h":
        case "git branch --help":
          response = "Try 'git branch -a'.";
          break;
        case "git branch -a":
          response = "root\nskills\nprojects\nexperience\ncontact-me";
          break;
        case "git checkout":
        case "git checkout -h":
        case "git checkout --help":
          response =
            "git checkout \n[root]\n[skills]\n[projects]\n[experience]\n[contact-me]";
          break;
        case "git checkout root":
          response = "Switched to branch 'root'";
          navigate("/root");
          break;
        case "git checkout skills":
          response = "Switched to branch 'skills'";
          navigate("skills");
          break;
        case "git checkout projects":
          response = "Switched to branch 'projects'";
          navigate("projects");
          break;
        case "git checkout experience":
          response = "Switched to branch 'experience'";
          navigate("experience");
          break;
        case "git checkout contact-me":
          response = "Switched to branch 'contact-me'";
          navigate("contact-me");
          break;
        case "sudo rm -rf":
          response = "Oi, that's illegal.";
          break;
        default:
          response = "Invalid command. See 'git --help'.";
          break;
      }
      setTerminalRes([...terminalRes, response]);
    }
  };

  return (
    <div className="flex flex-col bg-black rounded-md w-full sm:text-xs text-[10px] font-fira min-h-[208px] tracking-wide">
      <div className="relative bg-[#393939] rounded-t-md py-0.5">
        <p className="absolute z-10 w-full text-center">Terminal</p>
        <div className="flex items-center bg-transparent gap-x-1 h-4 pl-2">
          <div className="flex h-2 w-2 items-center justify-center rounded-full p-1 bg-red-500" />
          <div className="flex h-2 w-2 items-center justify-center rounded-full p-1 bg-yellow-500" />
          <div className="flex h-2 w-2 items-center justify-center rounded-full p-1 bg-green-500" />
        </div>
      </div>

      <div className="overflow-y-auto bg-black pl-2 py-0.5 rounded-b-md">
        {terminalRes.map((consoleLog, idx) => {
          return (
            <div key={idx}>
              <p className="empty:hidden pb-1 whitespace-pre-line">
                {`${consoleLog}`}
              </p>
              <div className="flex">
                <span className="whitespace-nowrap pr-2">{terminalName}</span>
                <input
                  id={`command${idx}`}
                  maxLength={32}
                  autoComplete="off"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  className="bg-black resize-none border-none outline-none w-full"
                  onKeyDown={onCommand}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terminal;
