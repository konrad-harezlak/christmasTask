### Elf Management
## 1. Add Elf
Route: POST /addElf/:firstName/:lastName
Controller: elfController.addElf
This route is used to add a new elf to the system. It expects the first and last names of the elf as parameters in the URL. The corresponding controller (elfController.addElf) will handle the logic of creating a new elf with the provided names and adding it to the system.

## 2. Remove Elf
Route: DELETE /removeElf/:idElf
Controller: elfController.removeElf
This route is responsible for removing an elf from the system. It expects the ID of the elf to be removed as a parameter in the URL. The controller (elfController.removeElf) will handle the logic of finding and removing the elf with the specified ID.

## 3. Set Free Elf
Route: PUT /setFreeElf/:idElf
Controller: elfController.setFree
Used to update the status of an elf, setting them free. The route expects the ID of the elf in the URL, and the controller (elfController.setFree) will handle the logic of updating the elf's status.

## 4. Set Maternity Leave
Route: PUT /setMaternityLeave/:idElf
Controller: elfController.setMaternityLeave
Similar to setting a free elf, this route updates the status of an elf, putting them on maternity leave. The ID of the elf is expected in the URL, and the controller (elfController.setMaternityLeave) will manage the necessary updates.

Package Management
## 5. Add Package
Route: POST /addPackage/:name
Controller: packageController.addPackage
This route is for adding a new package to the system. It expects the name of the package as a parameter in the URL. The corresponding controller (packageController.addPackage) will handle the logic of creating a new package with the provided name and adding it to the system.

## 6. Sign Package
Route: PUT /signPackage/:idPackage/:idElf
Controller: packageController.signPackage
Used to sign a package with a specific elf. The route expects both the ID of the package and the ID of the elf in the URL. The controller (packageController.signPackage) will handle the logic of associating the elf with the package and updating relevant information.

Miscellaneous
## 7. Welcome Message
Route: GET /
Controller: None (Direct Response)
This route simply responds with a welcome message when accessed. It doesn't involve controllers and serves as a basic welcome page for the API.

Each route corresponds to a specific action related to elf or package management, and the controllers handle the business logic associated with these actions.
