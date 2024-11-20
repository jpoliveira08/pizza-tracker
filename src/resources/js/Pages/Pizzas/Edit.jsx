import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import UpdatePizzaOrderForm from "@/Pages/Pizzas/Partials/UpdatePizzaOrderForm.jsx";

const Edit = ({ auth, pizza }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{pizza.id}</h2>}
        >
            <Head title={"Order #" + pizza.id} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePizzaOrderForm pizza={pizza} className="max-w-xl"></UpdatePizzaOrderForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Edit;
