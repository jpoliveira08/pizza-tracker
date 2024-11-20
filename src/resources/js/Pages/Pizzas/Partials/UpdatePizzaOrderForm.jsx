import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import {useForm} from "@inertiajs/react";

const UpdatePizzaOrderForm = ({ pizza, className = ''}) => {
    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ];

    const { data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(', '),
        status: pizza.status
    })


    const submit = (e) => {
        e.preventDefault();

        patch(route('pizzas.update', pizza.id), {
            preserveScroll: true
        });
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    View and change any information associated with this order.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput
                        id="crust"
                        className="mt-1 block w-full"
                        value={data.crust}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.toppings}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.status} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

export default UpdatePizzaOrderForm;
