import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChangingText from "@/lib/change-text";
import {
  MessageCircle,
  CalendarCheck,
  Heart,
  ThumbsUp,
  Users,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";
import Image from "next/image";

const Texts = [
  "SUPERVISÓRIO SCADA - INDÚSTRIA 4.0",
  "SERVIÇOS DE MANUTENÇÃO ELÉTRICA",
  "PROJETO ELÉTRICO",
  "MANUTENÇÃO DE NOBREAKS E ESTABILIZADORES",
];

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section className="flex flex-col py-12 px-4 justify-center items-center h-64 max-h-64 relative">
        <ChangingText text={Texts} />
        <p className="text-muted-foreground leading-relaxed tracking-normal text-xs text-center">
          Fornecemos serviços manutenção elétrica com equipe especializada.
        </p>
        <Button className="absolute bottom-2" variant={"blue"}>
          Saiba mais
        </Button>
      </section>
      <section className="bg-muted mt-12 p-4 py-12 space-y-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-center font-medium tracking-wide select-none">
          Aqui você pode...
        </h2>
        <div className="flex flex-col w-fit space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 gap-2 ">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4 dark:hover:bg-zinc-900/90 hover:rounded-md hover:cursor-pointer group  select-none transition-all">
              <MessageCircle className="text-blue-500 dark:text-blue-200 group-hover:fill-blue-500" />
              <h2 className="font-semibold">Falar conosco</h2>
              <p className="text-muted-foreground text-xs">Entre em contato.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4 dark:hover:bg-zinc-900/90 hover:rounded-md hover:cursor-pointer group  select-none transition-all">
              <Heart className="text-blue-500 dark:text-blue-200 group-hover:fill-blue-500" />
              <h2 className="font-semibold">Avaliar</h2>
              <p className="text-muted-foreground text-xs">
                Avalie nossa empresa.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4 dark:hover:bg-zinc-900/90 hover:rounded-md hover:cursor-pointer group  select-none transition-all">
              <CalendarCheck className="text-blue-500 dark:text-blue-200 group-hover:fill-blue-500 group-hover:text-blue-200" />
              <h2 className="font-semibold">Solicitar orçamento</h2>
              <p className="text-muted-foreground text-xs">
                Solicite seu orçamento
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4 dark:hover:bg-zinc-900/90 hover:rounded-md hover:cursor-pointer group  select-none transition-all">
              <ThumbsUp className="text-blue-500 dark:text-blue-200 group-hover:fill-blue-500" />
              <h2 className="font-semibold">Seguir</h2>
              <p className="text-muted-foreground text-xs">
                Você pode também nos seguir nas redes sociais.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="lg:flex justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover hover:bg-blue-900 hover:text-primary-foreground  dark:hover:text-blue-50 select-none">
          <Users />
          <p>Clientes atendidos</p>
          <p>1570</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <CalendarCheck />
          <p>Clientes atendidos</p>
          <p>9850</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <BriefcaseBusiness />
          <p>Clientes atendidos</p>
          <p>8870</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <Trophy />
          <p>Clientes atendidos</p>
          <p>19830</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-4">
        <h2 className="font-semibold text-2xl tracking-tighter">
          Nossas principais áreas de atuação
        </h2>
        <h3 className="tracking-wider dark:text-blue-300 text-blue-500 my-2 text-xs">
          Conheça alguns dos segmentos que atuamos
        </h3>
        <p className="text-center text-xs text-muted-foreground">
          A Zeitounian Tecnologia é hoje uma empresa de engenharia que atende
          diversos segmentos do mercado com produtos e serviços especializados.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border rounded-md hover:rounded-md flex flex-col space-y-2 hover:bg-blue-900/90 transition-all shadow-md group max-w-[200px]">
            <Image
              src={"/assist_nobreak_estab.jpg"}
              width={1000}
              height={100}
              alt="ASSISTÊNCIA TÉCNICA"
              className="w-full bg-cover object-cover rounded-t-md border-b lg:max-w-[200px]"
            />
            <h2 className="w-full text-center font-semibold tracking-tight text-nowrap truncate group-hover:text-blue-50">
              ASSISTÊNCIA TÉCNICA
            </h2>
            <p className="text-xs font-light text-center w-full p-2 group-hover:text-blue-50">
              Especializados em manutenção de conversores de energia, nobreaks,
              estabilizadores, carregadores e fontes.
            </p>
          </div>
          <div className="border rounded-md hover:rounded-md flex flex-col space-y-2 hover:bg-blue-900/90 transition-all shadow-md group max-w-[200px]">
            <Image
              src={"/projeto_eletrico.jpg"}
              width={1000}
              height={100}
              alt=""
              className="w-full bg-cover object-cover rounded-t-md border-b lg:max-w-[200px]"
            />
            <h2 className="w-full text-center font-semibold tracking-tight text-nowrap truncate group-hover:text-blue-50">
              PROJETO ELÉTRICO
            </h2>
            <p className="text-xs font-light text-center w-full p-2 group-hover:text-blue-50">
              {" "}
              Projeto de infraestrutura elétrica residencial, comercial e
              industrial conforme as normas vigentes.
            </p>
          </div>
          <div className="border rounded-md hover:rounded-md flex flex-col space-y-2 hover:bg-blue-900/90 transition-all shadow-md group max-w-[200px]">
            <Image
              transition-all
              src={"/manut_eletrica.jpg"}
              width={1000}
              height={100}
              alt=""
              className="w-full bg-cover object-cover rounded-t-md border-b lg:max-w-[200px]"
            />
            <h2 className="w-full text-center font-semibold tracking-tight text-nowrap truncate group-hover:text-blue-50">
              MANUTENÇÃO ELÉTRICA
            </h2>
            <p className="text-xs font-light text-center w-full p-2 group-hover:text-blue-50">
              Serviços de manutenção elétrica com equipe especializada e
              equipamentos de ponta.
            </p>
          </div>
          <div className="border rounded-md hover:rounded-md flex flex-col space-y-2 hover:bg-blue-900/90 transition-all shadow-md group max-w-[200px]">
            <Image
              transition-all
              src={"/sistemas_iot.jpg"}
              width={1000}
              height={100}
              alt=""
              className="w-full bg-cover object-cover rounded-t-md border-b lg:max-w-[200px]"
            />
            <h2 className="w-full text-center font-semibold tracking-tight text-nowrap truncate group-hover:text-blue-50">
              IOT - INDÚSTRIA 4.0
            </h2>
            <p className="text-xs font-light text-center w-full p-2 group-hover:text-blue-50">
              Projetos para clientes que necessitam de hardwares dedicado para
              aplicações de controle e gerenciamento, entre no mundo do IOT com
              a Zeitounian.
            </p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-bold tracking-tighter w-full text-center">Depoimentos</h2>

      </section>
    </main>
  );
}
