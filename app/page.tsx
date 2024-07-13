
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#1a3d6d] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white ml-2">SIGA</h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Consulta a documentos emitidos pela UFSCar/DIGRA</h2>
          </div>
          <p className="mb-4">
            Esta página permite obter uma cópia digital fiel de um documento emitido pela UFSCar/DiGRA. A cópia obtida
            por este sistema pode ser comparada com o documento impresso, para garantir sua autenticidade.
          </p>
          <p className="mb-4">
            Digite abaixo o <strong>Código de Acesso</strong> que pode ser encontrado no documento recebido.
          </p>
          <div className="flex items-center mb-4">
            <Input type="text" placeholder="Código de Acesso: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" className="flex-1 mr-4" />
            <Button className="bg-orange-500 text-white">OBTER CÓPIA</Button>
          </div>
          <p className="text-sm text-gray-500">
            Em caso de dúvidas quanto à veracidade de um documento e/ou problema de acesso, por favor entre em contato
            com a Divisão de Gestão e Registro Acadêmico (DiGRA - digra@ufscar.br).
          </p>
        </div>
      </main>
    </div>
  );
}
