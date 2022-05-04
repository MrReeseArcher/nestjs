'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        queryInterface.bulkInsert('users', [
            // {
            //     id: 1,
            //     email: 'test1@main.ru',
            //     password: 'Test',
            //     createdAt: new Date(),
            //     updatedAt: new Date(),
            // },
            // {
            //     id: 2,
            //     email: 'test2@main.ru',
            //     password: 'Test',
            //     createdAt: new Date(),
            //     updatedAt: new Date(),
            // },
            {
                id: 3,
                email: 'test3@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                email: 'test4@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                email: 'test5@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                email: 'test6@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                email: 'test7@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                email: 'test8@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                email: 'test9@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 10,
                email: 'test10@main.ru',
                password: 'Test',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        queryInterface.bulkInsert('user_roles', [
            {
                roleId: 1,
                userId: 1,
            },
            {
                roleId: 1,
                userId: 2,
            },
            {
                roleId: 1,
                userId: 3,
            },
            {
                roleId: 1,
                userId: 4,
            },
            {
                roleId: 1,
                userId: 5,
            },
            {
                roleId: 1,
                userId: 6,
            },
            {
                roleId: 1,
                userId: 7,
            },
            {
                roleId: 1,
                userId: 8,
            },
            {
                roleId: 1,
                userId: 9,
            },
            {
                roleId: 1,
                userId: 10,
            },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
        return queryInterface.bulkDelete('user_roles', null, {});
    }
};
