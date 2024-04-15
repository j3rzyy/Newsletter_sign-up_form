import { MyForm } from "../components/CustomForm/CustomForm";

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const deleteUser = async (id: number) => {
  const data = await fetch(
    `${baseURL}/${id - 1}`,
    {
      method: "DELETE",
    }
  );
  return data;
};

const saveUser = async (data: MyForm) => {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  return response;
};

const getUsers = async (fieldValue: string) => {
  const response = await fetch(
    `${baseURL}?email=${fieldValue}`
  );
  return response;
};

export const registrationService = {
  deleteUser,
  saveUser,
  getUsers,
};
