package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Client;
import com.example.apidenrees.ServiceImpl.ClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.image.BandCombineOp;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Client")
public class ClientController {
    @Autowired
    ClientServiceImpl clientServiceImpl;

    // ***************  Ajout d'un Client***************

    @PostMapping("/addClient")
    public String saveClient(@RequestBody Client client){
        return clientServiceImpl.aujout_client(client);
    }

    @PostMapping("/validClient")
    public String validClient(@RequestBody Client client) {
        return clientServiceImpl.valid(client);
    }

    @GetMapping("/desactiverClient/{id}")
    public void desactiverClient(@PathVariable("id") Long id) {
        this.clientServiceImpl.desactiverClient(id);
    }

    @GetMapping("/activerClient/{id}")
    public void activerClient(@PathVariable("id") Long id) {
        this.clientServiceImpl.activerClient(id);
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
}
