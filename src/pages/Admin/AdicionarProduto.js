import React, { useEffect, useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import ApiService from "../../services/api";

export default function AdicionarProduto() {
  const [marcas, setMarcas] = useState([]);
  const [tagsDisponiveis, setTagsDisponiveis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marcasData = await ApiService.fetchData({
          url: "/api/marcas",
          method: "get",
        });
        setMarcas(marcasData);

        const tagsData = await ApiService.fetchData({
          url: "/api/tags",
          method: "get",
        });
        setTagsDisponiveis(tagsData);
      } catch (error) {
        console.error("Erro ao carregar marcas ou tags:", error);
      }
    };
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    nome: Yup.string().required("O nome do produto é obrigatório."),
    preco: Yup.number().required("O preço é obrigatório."),
    categoria: Yup.string().required("A categoria é obrigatória."),
    quantidade: Yup.number().required("A quantidade é obrigatória."),
    data_fabricacao: Yup.date().nullable(),
    data_validade: Yup.date().nullable(),
  });

  return (
    <Formik
      initialValues={{
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        quantidade: "",
        modelo: "",
        fabricante: "",
        data_fabricacao: "",
        data_validade: "",
        marca_id: "",
        tags: [],
        imagens: [],
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const formData = new FormData();
          for (const key in values) {
            if (key === "tags") {
              values.tags.forEach((tag) => formData.append("tags[]", tag));
            } else if (key === "imagens") {
              values.imagens.forEach((imagem) =>
                formData.append("imagens", imagem)
              );
            } else {
              formData.append(key, values[key]);
            }
          }
          await ApiService.fetchData({
            url: "/api/produtos",
            method: "post",
            data: formData,
          });
          alert("Produto salvo com sucesso!");
        } catch (error) {
          console.error("Erro ao salvar produto:", error);
          alert("Erro ao salvar o produto.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue, errors, touched }) => (
        <Form className="space-y-8 divide-y divide-gray-200">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Adicionar Produto
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Preencha as informações do produto. Os campos obrigatórios estão marcados.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Nome do Produto */}
              <div className="sm:col-span-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome do Produto <span className="text-red-500">*</span>
                </label>
                <Field
                  name="nome"
                  type="text"
                  className={`mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md ${
                    errors.nome && touched.nome ? "border-red-500" : ""
                  }`}
                />
                {errors.nome && touched.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                )}
              </div>

              {/* Preço */}
              <div className="sm:col-span-2">
                <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
                  Preço (R$) <span className="text-red-500">*</span>
                </label>
                <Field
                  name="preco"
                  type="number"
                  step="0.01"
                  className={`mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md ${
                    errors.preco && touched.preco ? "border-red-500" : ""
                  }`}
                />
                {errors.preco && touched.preco && (
                  <p className="text-red-500 text-sm mt-1">{errors.preco}</p>
                )}
              </div>

              {/* Descrição */}
              <div className="sm:col-span-6">
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                  Descrição
                </label>
                <Field
                  name="descricao"
                  as="textarea"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              {/* Categoria */}
              <div className="sm:col-span-3">
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
                  Categoria <span className="text-red-500">*</span>
                </label>
                <Field
                  name="categoria"
                  type="text"
                  className={`mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md ${
                    errors.categoria && touched.categoria ? "border-red-500" : ""
                  }`}
                />
                {errors.categoria && touched.categoria && (
                  <p className="text-red-500 text-sm mt-1">{errors.categoria}</p>
                )}
              </div>

              {/* Quantidade */}
              <div className="sm:col-span-3">
                <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
                  Quantidade <span className="text-red-500">*</span>
                </label>
                <Field
                  name="quantidade"
                  type="number"
                  className={`mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md ${
                    errors.quantidade && touched.quantidade ? "border-red-500" : ""
                  }`}
                />
                {errors.quantidade && touched.quantidade && (
                  <p className="text-red-500 text-sm mt-1">{errors.quantidade}</p>
                )}
              </div>

              {/* Modelo */}
              <div className="sm:col-span-3">
                <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
                  Modelo
                </label>
                <Field
                  name="modelo"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* Fabricante */}
              <div className="sm:col-span-3">
                <label htmlFor="fabricante" className="block text-sm font-medium text-gray-700">
                  Fabricante
                </label>
                <Field
                  name="fabricante"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* Data de Fabricação */}
              <div className="sm:col-span-3">
                <label htmlFor="data_fabricacao" className="block text-sm font-medium text-gray-700">
                  Data de Fabricação
                </label>
                <Field
                  name="data_fabricacao"
                  type="date"
                  className="mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* Data de Validade */}
              <div className="sm:col-span-3">
                <label htmlFor="data_validade" className="block text-sm font-medium text-gray-700">
                  Data de Validade
                </label>
                <Field
                  name="data_validade"
                  type="date"
                  className="mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* Marca */}
              <div className="sm:col-span-3">
                <label htmlFor="marca_id" className="block text-sm font-medium text-gray-700">
                  Marca
                </label>
                <Field
                  as="select"
                  name="marca_id"
                  className="mt-1 block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Selecione uma marca</option>
                  {marcas.map((marca) => (
                    <option key={marca.id} value={marca.id}>
                      {marca.nome}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Tags</h3>
            <FieldArray
              name="tags"
              render={(arrayHelpers) => (
                <>
                  <select
                    className="block w-full px-4 py-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      const selectedTag = e.target.value;
                      if (selectedTag && !values.tags.includes(selectedTag)) {
                        arrayHelpers.push(selectedTag);
                      }
                    }}
                  >
                    <option value="">Selecione uma tag</option>
                    {tagsDisponiveis.map((tag) => (
                      <option key={tag.id} value={tag.id}>
                        {tag.label}
                      </option>
                    ))}
                  </select>
                  <ul className="mt-4 space-y-2">
                    {values.tags.map((tag, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>{tagsDisponiveis.find((t) => t.id === parseInt(tag))?.label || tag}</span>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            />
          </div>

          {/* Botões */}
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {isSubmitting ? "Salvando..." : "Salvar Produto"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
