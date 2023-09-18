import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        {
            "id": 1,
            "name": "John",
            "math_mark": 85,
            "physics_mark": 75,
            "chemistry_mark": 90
        },
        {
            "id": 2,
            "name": "Alice",
            "math_mark": 78,
            "physics_mark": 80,
            "chemistry_mark": 88
        },
        {
            "id": 3,
            "name": "Bob",
            "math_mark": 92,
            "physics_mark": 88,
            "chemistry_mark": 94
        },
        {
            "id": 4,
            "name": "Emily",
            "math_mark": 88,
            "physics_mark": 92,
            "chemistry_mark": 86
        },
        {
            "id": 5,
            "name": "Michael",
            "math_mark": 95,
            "physics_mark": 78,
            "chemistry_mark": 92
        },
        {
            "id": 6,
            "name": "Sophia",
            "math_mark": 72,
            "physics_mark": 68,
            "chemistry_mark": 75
        },
        {
            "id": 7,
            "name": "Daniel",
            "math_mark": 90,
            "physics_mark": 85,
            "chemistry_mark": 91
        },
        {
            "id": 8,
            "name": "Olivia",
            "math_mark": 84,
            "physics_mark": 76,
            "chemistry_mark": 89
        },
        {
            "id": 9,
            "name": "William",
            "math_mark": 79,
            "physics_mark": 81,
            "chemistry_mark": 87
        },
        {
            "id": 10,
            "name": "Ella",
            "math_mark": 87,
            "physics_mark": 90,
            "chemistry_mark": 85
        }
    ];




    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey={'math_mark'} stroke='red'></Line>
                <Line dataKey={'physics_mark'} stroke='green'></Line>
                <Line dataKey={'chemistry_mark'} stroke='orange'></Line>
                </LChart>
        </div>
    );
};

export default LineChart;