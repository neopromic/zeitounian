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
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Texts = [
  "SUPERVISÓRIO SCADA - INDÚSTRIA 4.0",
  "SERVIÇOS DE MANUTENÇÃO ELÉTRICA",
  "PROJETO ELÉTRICO",
  "MANUTENÇÃO DE NOBREAKS E ESTABILIZADORES",
];

const depoiments = [
  {
    id: 0,
    name: "A Zeitounian há anos presta serviços em nossos nobreaks de 80 a 120 kva, mas em 2017 iniciamos um projeto para implantação de um sistema SCADA, a solução atendeu as espectativas da empresa.",
  },
  {
    id: 1,
    name: "A Zeitounian atende com a velocidade que nosso grupo necessita, estão sempre prontos para resolver nossas demandas e mantendo nossos nobreaks operacionais",
  },
];

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section className="flex flex-col py-12 px-4 justify-center items-center h-64 max-h-64 relative">
        <ChangingText text={Texts} />
        <p className="text-muted-foreground leading-relaxed tracking-normal text-xs w-full text-center">
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
          <Users className="text-blue-500 dark:text-blue-200" />
          <p>Clientes atendidos</p>
          <p>1570</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <CalendarCheck className="text-blue-500 dark:text-blue-200" />
          <p>Atendimentos realizados</p>
          <p>9850</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <BriefcaseBusiness className="text-blue-500 dark:text-blue-200" />
          <p>Maquinas reparadas</p>
          <p>8870</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 my-4 lg:rounded-xl group hover:bg-blue-900 hover:text-primary-foreground dark:hover:text-blue-50 select-none">
          <Trophy className="text-blue-500 dark:text-blue-200" />
          <p>Orçamentos enviados</p>
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
      <section className="p-4 space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter w-full text-center">
          Depoimentos
        </h2>
        <div className="px-12 py-4 overflow-hidden border rounded-md flex items-center justify-center h-96">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {depoiments.map((data) => (
                <CarouselItem key={data.id} className="pl-1 md:basis-1/2 lg:basis-1/2 ">
                  <div className="p-1">
                    <Card className="min-h-full">
                      <CardContent className="flex aspect-square items-center justify-center p-6 ">
                        <p className="text-sm font-medium text-center ">
                          {data.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="bg-muted  p-4 ">
        <h2 className="font-bold text-xl uppercase">Sobre nós</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pensamos que os melhores serviços e projetos depende do quanto podemos
          captar das ideias de nossos clientes.
        </p>
        <div className="flex my-4 gap-2">
          <Facebook
            className="bg-background rounded-full p-2 text-blue-500 fill-blue-500"
            size={32}
          />
          <Twitter
            className="bg-background rounded-full p-2 text-blue-500 fill-blue-500"
            size={32}
          />
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-bold text-xl">Contatos</h3>
          <div className="bg-background w-full rounded p-4">
            <h4 className="font-semibold">Telefone</h4>
            <p className="select-all">+55 11 4773-5569</p>
          </div>
          <div className="bg-background w-full rounded p-4">
            <h4 className="font-semibold">Email</h4>
            <p>
              Email:{" "}
              <span className="text-blue-500 underline font-medium select-all">
                {" "}
                tecnologia@zeitounian.com.br
              </span>
            </p>
          </div>
          <div className="bg-background w-full rounded p-4">
            <h4 className="font-semibold">Localização</h4>
            <p className="select-all text-sm">
              Rua Sgto. Antonio Vieira Noia, 106, sala 3 e 4, Cidade Saude,
              Itapevi, São Paulo, Brasil.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
