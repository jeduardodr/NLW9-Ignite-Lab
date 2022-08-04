import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


 export function Subscribe(){
//Para enviar para a pagina event
  const navigate  = useNavigate()
  //constante para receber os valores dos input
const [name, setName] = useState("");
const [email, setEmail] = useState("");
//criar um novo user so quando chamar a funcao CreateSubscriber
const [createSubscriber, {loading}] = useCreateSubscriberMutation()

// funcao para quando o utilizador carregar no submitr do formulario
//usar async e await para tornar uma funcao assincna que "devolve" noutra pagina
async function handleSubscribe(event: FormEvent){
  event.preventDefault();
 
    await createSubscriber({
      variables:{
        name,
        email,
      }
    })
  navigate('/event')
}
  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
            <Logo/>
            <h1 className="mt-8 text-[2.5rem] leading-tight">
                Construa uma <strong className="text-blue-500">aplicacao completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
                Em apenas uma semana voce vai dominar na pratica uma das tecnologias mais utilzadas e com alta demanda para acessar as melhores opurtunidades de mercado
            </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className=" text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full">
              <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
              />
              <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
              />
              <button type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Gatantir minha vaga
              </button>


            </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
      </div>
  );
 }