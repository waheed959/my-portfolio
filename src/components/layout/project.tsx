import Card from "@/components/Cardcomponent";

export default function ProjectComoponent() {
  return (
    <div className="bg-slate-950 mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-center">
        <h1 id="projects" className="text-5xl text-center pt-8 text-white font-serif">
          My Projects
        </h1>
        <div className="w-28 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl mb-7 md:mb-10"></div>
      </div>

      <div
        className="flex flex-col md:flex-row flex-wrap justify-center gap-x-5 md:px-12 w-full py-6 items-center"
      >
        <Card
          ImgSrc="/assignment.png"
          imgTitlle="45 Questions typescript Assignment "
          imgDescription="important assignment for the robust understanding not for backend but also for frontend"
          projectLink="https://github.com/waheed959/45-questions-assignment-typescript"
        />
        <Card
          ImgSrc="/project01.png"
          imgTitlle="Simple Calculator "
          imgDescription="A CLI based Simple Calculator using typescript"
          projectLink="https://github.com/waheed959/simple-calculator"
        />
        <Card
          ImgSrc="/guessing.png"
          imgTitlle="Number guessing game "
          imgDescription="A CLI based number guessing game "
          projectLink="https://github.com/waheed959/cli-number-guessing"
        />
        <Card
          ImgSrc="/atm.png"
          imgTitlle="AN ATM macine "
          imgDescription="A CLI based atm machine "
          projectLink="https://github.com/waheed959/Atm-machine"
        />
        <Card
          ImgSrc="/todo.png"
          imgTitlle="TO_Do list"
          imgDescription="A CLI based to do list"
          projectLink="https://github.com/waheed959/todo_list"
        />
        <Card
          ImgSrc="/word.png"
          imgTitlle="Word counter "
          imgDescription="A CLI based word counter"
          projectLink="https://github.com/waheed959/word-counter"
        />
        <Card
          ImgSrc="/convertor.png"
          imgTitlle="Currency convertor "
          imgDescription="Currency convertor using react and tailwind  "
          projectLink="https://github.com/waheed959/currency-converter"
        />
      </div>
    </div>
  );
}
