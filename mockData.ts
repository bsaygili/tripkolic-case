import { CategoriesType, FiltersType, SampleDataType } from "@/shared/types";


export const categories = ["Tours", "Tickets", "Rent", "Transfer"] as CategoriesType

export const filters = {
  Tours: [
    { name: "Theme", options: ["Island Tour", "Land Tour", "Safari"] },
    {
      name: "Activity",
      options: ["Swimming", "Running", "Elephant Care", "Snorkeling"],
    },
    { name: "Price", type: "range", min: 0, max: 20000, default: 150 },
    { name: "Start Time", type: "time" },
    { name: "Group Size", type: "range", min: 1, max: 50, default: 10 },
    { name: "Vehicle", options: ["Yacht", "Speedboat", "Safari", "Catamaran"] },
    {
      name: "Features",
      options: ["Transfer", "Halal Food", "Vegetarian Food"],
    },
  ],
  Tickets: [
    { name: "Event Type", options: ["Concert", "Festival", "Theater"] },
    { name: "Price", type: "range", min: 0, max: 500 },
    { name: "Location", type: "text" },
    { name: "Date", type: "date" },
  ],
  Rent: [
    { name: "Vehicle Type", options: ["Car", "Bike", "Scooter"] },
    { name: "Price", type: "range", min: 10, max: 1000 },
    { name: "Rental Duration", type: "number", min: 1, max: 30 },
    { name: "Insurance", options: ["Yes", "No"] },
  ],
  Transfer: [
    { name: "Vehicle Type", options: ["Taxi", "Bus", "Private Car"] },
    { name: "Passengers", type: "number", min: 1, max: 10 },
    { name: "Pickup Location", type: "text" },
    { name: "Dropoff Location", type: "text" },
  ],
} as FiltersType


export const sampleData = {
  Tours: [
    { title: "Island Adventure", price: 150, theme: "Island Tour", vehicle: "Yacht", ratings: "4.1", discount: 25, discountedPrice: 112.5, imageSrc: "https://picsum.photos/id/49/200", description: "Lorem ipsum sit" },
    { title: "Safari Experience", price: 200, theme: "Safari", vehicle: "Safari", ratings: "4.1", discount: 40, discountedPrice: 120, imageSrc: "https://picsum.photos/id/49/200", description: "Lorem ipsum sit" }
  ],
  Tickets: [
    { title: "Rock Concert", price: 120, eventType: "Concert", location: "NYC", ratings: "4.1", discount: 50, discountedPrice: 60, imageSrc: "https://picsum.photos/id/49/200", description: "Lorem ipsum sit" }
  ],
  Rent: [
    { title: "Luxury Car Rental", price: 500, vehicleType: "Car", insurance: "Yes", ratings: "4.1", discount: 25, discountedPrice: 375, imageSrc: "https://picsum.photos/id/49/200", description: "Lorem ipsum sit" }
  ],
  Transfer: [
    { title: "Private Car Transfer", price: 75, vehicleType: "Private Car", passengers: 2, ratings: "4.1", discount: 40, discountedPrice: 45, imageSrc: "https://picsum.photos/id/49/200", description: "Lorem ipsum sit" }
  ]
} as SampleDataType