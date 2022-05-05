declare namespace app {
    type User = {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
    };

    type Todo = {
        userId: User['id'];
        id: number;
        title: string;
        completed: boolean;
    };
}
