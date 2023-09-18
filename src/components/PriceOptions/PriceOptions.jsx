import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to gym facilities during off-peak hours.",
            "price": 30.00,
            "features": [
                "Access to gym equipment",
                "Off-peak hour access (9 AM - 5 PM)",
                "Locker usage",
                "Access to cardio machines",
                "Access to weightlifting area"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "description": "Unlimited access to gym facilities.",
            "price": 50.00,
            "features": [
                "Access to gym equipment",
                "Off-peak hour access (9 AM - 5 PM)",
                "Locker usage",
                "Access to cardio machines",
                "Access to weightlifting area"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "description": "Unlimited access to gym facilities and personal trainer sessions.",
            "price": 80.00,
            "features": [
                "Access to gym equipment",
                "Off-peak hour access (9 AM - 5 PM)",
                "Locker usage",
                "Access to cardio machines",
                "Access to weightlifting area"
            ]
        },
        {
            "id": 4,
            "name": "Annual Membership",
            "description": "Unlimited access for a year with discounted rates.",
            "price": 500.00,
            "features": [
                "Access to gym equipment",
                "Off-peak hour access (9 AM - 5 PM)",
                "Locker usage",
                "Access to cardio machines",
                "Access to weightlifting area"
            ]
        }
    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;