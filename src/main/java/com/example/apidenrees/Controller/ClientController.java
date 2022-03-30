package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.Client;
import com.example.apidenrees.ServiceImpl.ClientServiceImpl;
import com.example.apidenrees.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BandCombineOp;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Client")
public class ClientController {
    @Autowired
    ClientServiceImpl clientServiceImpl;

    @Autowired
    ClientService clientService;

    // ***************  Ajout d'un Client***************

    @PostMapping("/addClient")
    public Client saveClient(Client client, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        return clientService.ajout_Client(client, multipartFile);
    }

    @PostMapping("/validClient")
    public String validClient(@RequestBody Client client) {
        return clientServiceImpl.valid(client);
    }
    // ******************** Liste des Clients

    @GetMapping("/listClient")
    List<Client> listClient(){
        return this.clientServiceImpl.listClient();
    }

    // ************************* Affichage par Client *****************

    @GetMapping("/infoClient/{id}")
    public Client getClientById(@PathVariable Long id) {
        return this.clientServiceImpl.getClientById(id);
    }

    // ************************* Suppression de Client ***************

    @DeleteMapping("/deleteClient/{id}")
    public String delete(@PathVariable Long id){
        return this.clientServiceImpl.supprimer_client(id);
    }

    // ************************  Modification de Client ***************
    @PutMapping("/updateClient/{id}")
    public String updateClient(@PathVariable Long id, @RequestBody Client client){
        return this.clientServiceImpl.modifier_client(client, id);
    }
    // ************************  Modification Mot de Passe de Client ***************
    @PutMapping("/ModifyByPassword/{id}/{ancien}/{nouveau}")
    public Client ModifyPassword(@PathVariable Long id, @PathVariable String ancien, @PathVariable String nouveau){
        return this.clientServiceImpl.modifyPassword(id,ancien,nouveau);
    }
    @GetMapping("/authentificationClient/{login}&{password}")
    public Client connexion(@PathVariable("login") String login, @PathVariable("password") String password) {
        return clientServiceImpl.findByLoginAndPassword(login, password);
    }
    @GetMapping(value = "addPhoto/{idClient}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] getpHOTO(@PathVariable("idClient") Long Id) throws IOException {
        return clientService.getpHOTO(Id);

    }
}
