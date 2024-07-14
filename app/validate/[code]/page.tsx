"use client";
import Header from "@/app/header";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
export interface Student {
  code: string;
  name: string;
  course: string;
  year: number;
  semester: number;
}

const students: Student[] = [
  {
    code: "12",
    name: "Jonathan Santos Silva",
    course: "Ciência de Computação",
    year: 2020,
    semester: 5,
  },
  {
    code: "32",
    name: "Silva Arzeni",
    course: "Ciência de Computação",
    year: 2019,
    semester: 3,
  },
];

export default function ValidatePage({ params }: { params: { code: string } }) {
  const student = students.find((student) => student.code === params.code);

  const [studentCode, setStudentCode] = useState<string>("");
  const clickHandler = () => {
    console.log(studentCode);
    window.location.href = `/validate/${studentCode}`;
  };

  useEffect(() => {
    window.history.pushState(null, "", `/validate/${studentCode}`);
  }, [studentCode]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <div className="rounded-md bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Consulta a documentos emitidos pela UFSCar/DIGRA
            </h2>
          </div>
          <p className="mb-4">
            Esta página permite obter uma cópia digital fiel de um documento
            emitido pela UFSCar/DiGRA. A cópia obtida por este sistema pode ser
            comparada com o documento impresso, para garantir sua autenticidade.
          </p>
          <p className="mb-4">
            Digite abaixo o <strong>Código de Acesso</strong> que pode ser
            encontrado no documento recebido.
          </p>
          <div className="mb-4 flex items-center">
            <Input
              onChange={(e) => setStudentCode(e.target.value)}
              value={studentCode}
              type="text"
              placeholder="Código de Acesso: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
              className="mr-4 flex-1"
            />
            <Button onClick={clickHandler} className="bg-orange-500 text-white">
              CONFIRMAR CÓDIGO
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Em caso de dúvidas quanto à veracidade de um documento e/ou problema
            de acesso, por favor entre em contato com a Divisão de Gestão e
            Registro Acadêmico (DiGRA - digra@ufscar.br).
          </p>
          {student ? (
            <div className="rounded bg-green-100 p-4">
              <h3 className="mb-2 text-lg font-bold">
                Código de Acesso Válido
              </h3>
              <p>
                O código de acesso digitado pertence a um aluno válido da
                UFSCar/DIGRA. Você pode prosseguir com a solicitação de cópia do
                documento.
              </p>
              <div className="mt-4">
                <p className="font-bold">Nome do Estudante: {student.name}</p>
                <p>Ano de Ingresso: {student.year}</p>
                <p>Curso: Ciência de {student.course}</p>
                <p>Semestre: {student.semester}</p>
              </div>
            </div>
          ) : (
            <div className="rounded bg-red-100 p-4">
              <h3 className="mb-2 text-lg font-bold">
                Código de Acesso Inválido
              </h3>
              <p>
                O código de acesso digitado não pertence a um aluno válido da
                UFSCar/DIGRA. Por favor, verifique o código digitado e tente
                novamente.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
