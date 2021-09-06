//Closure for save new vehicle
const vehiclesSave = () => {
    let vehicleList = [];
    const closure = (tradeMark, model, plaque) => {
        let vehicle = {
            tradeMark: tradeMark, 
            model: model, 
            plaque: plaque
        };
        vehicleList.push(vehicle);
    };

    return {
        addVehicle: (tradeMark, model, plaque) => { 
            return closure( tradeMark, model, plaque ) 
        },
        getVehicles: () => { 
            return vehicleList 
        }
    };
};

//Closure for save new container
const containersSave = () => {
    let containersList = [];
    const closure = (equipmentName, equipmentType, ownerIdentifier,
        ownerName, equipmentSize, bookingNumber, equipmentsTotal) => {
            debugger
            let container = {
                equipmentName : equipmentName,
                equipmentType : equipmentType,
                ownerIdentifier : ownerIdentifier,
                ownerName : ownerName,
                equipmentSize : equipmentSize,
                bookingNumber : bookingNumber,
                equipmentsTotal : equipmentsTotal
            };
            containersList.push(container);
        };

        return {
            addEquipment: (equipmentName, equipmentType, ownerIdentifier, 
                ownerName, equipmentSize, bookingNumber, equipmentsTotal) => {        
                return closure(equipmentName, equipmentType, ownerIdentifier, 
                    ownerName, equipmentSize, bookingNumber, equipmentsTotal)
            },
            getContainers: () => {
                return containersList;
            }
        };
};

//Create the appointment header
const appointmentHeader = () => {
    return appointmentMainHeader = {
        appointmentType: "SALIDA",
        serviceType: "CARRIER",
        shipper: "MAERSK",
        customerIdentifier: "MARISCOS SA DE CV",
        eventDate: "01-03-2021",
        transportIdentifier: "124544423",
        invoicingType: "GLOBAL",
        bankingReference: "000023433",
        credit: "NO",
        creditActive: "NO",
        mount: "800.00",
        userReceived: "SPBACILIO",
        photo: "NA"
    };
};

//Closures testing
const createAppointment = () =>{
    vehicles = vehiclesSave();
    vehicles.addVehicle("KENWORTH", "T-660", "AS-34K45");
    vehicles.addVehicle("VOLVO", "VNI", "IJW-3456");
    vehicles.addVehicle("INTERNATIONAL", "4400", "LNKS-32");

    containers = containersSave();
    containers.addEquipment("TTNU4881336", "DC", "400140", "HL", "20", "0000000001", "1");
    containers.addEquipment("TRLU7000329", "HC", "400007", "ONE", "40", "0000000004", "1");

    const appointmentBody = appointmentHeader();
    appointmentBody.vehiclesList = vehicles.getVehicles();
    appointmentBody.containersList = containers.getContainers();

    return appointmentBody;
}

//Execute
let appointment = createAppointment();
console.log(JSON.stringify(appointment));