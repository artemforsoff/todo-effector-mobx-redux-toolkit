export type UseTodo = (todo: app.Todo) => {
    handleChangeСompleted: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: () => void;
};
