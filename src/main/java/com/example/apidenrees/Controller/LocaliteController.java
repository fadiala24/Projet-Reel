package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Model.Localite;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Repositories.LocaliteRepository;
import com.example.apidenrees.Repositories.ProduitBoutiqueRepository;
import com.example.apidenrees.ServiceImpl.LocaliteServiceImpl;
import com.example.apidenrees.Services.LocaliteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("api/Localite")
@RestController
public class LocaliteController {
    @Autowired
    LocaliteService localiteService;

    @Autowired
    LocaliteRepository localiteRepository;

    @Autowired
    LocaliteServiceImpl localiteServiceImpl;
    @Autowired
    ProduitBoutiqueRepository produitBoutiqueRepository;

    // ***************  Ajout d'un Localite***************

    @PostMapping("/validLocalite")
    public String validLocalite(@RequestBody Localite localite){
        return localiteServiceImpl.aujout_localite(localite);
    }
    @PostMapping("/addLocalite")
    public Localite addLocalite(@RequestBody Localite localite){
        return localiteServiceImpl.addLocalite(localite);
    }

    // ******************** Liste des Localite

    @GetMapping("/listLocalite")
    List<Localite> listLocalite(){
        return this.localiteService.listLocalite();
    }

    @GetMapping("/listLocaliteVille/{etat}")
    List<Localite> listLocaliteVille(@PathVariable boolean etat )
    {
        return this.localiteRepository.findAllByParentIdV(etat);
    }

    @GetMapping("/listLocaliteQuartier/{etat}")
    List<Localite> listLocaliteQuartier(@PathVariable boolean etat )
    {
        return this.localiteRepository.findAllByParentIQ(etat);
    }


    @GetMapping("/listLocaliteQuartier/{parentId}/{etat}")
    List<Localite> listLocaliteQuartier(@PathVariable Long parentId, @PathVariable boolean etat ){
        return this.localiteRepository.findAllByParentIdAndEtat(parentId, etat);
    }

    // ************************* Affichage par Client *****************

    @GetMapping("/infoLocalite/{id}")
    public Localite getClientById(@PathVariable Long id) {
        return this.localiteServiceImpl.getLocaliteById(id);
    }

    // ************************* Suppression de Client ***************

    @DeleteMapping("/deleteLocalite/{id}")
    public String delete(@PathVariable Long id){
        return this.localiteServiceImpl.supprimer_Localite(id);
    }

    // ************************  Modification de Client ***************
    @PutMapping("/updateLocalite/{id}")
    public String updateLocalite(@PathVariable Long id, @RequestBody Localite localite){
        return this.localiteServiceImpl.modifier_Localite(localite, id);
    }

    @GetMapping("/getBoutiqueByQuartierCategory/{idB}")
    public List<ProduitBoutique>findBoutiqueByQuartierAndCategory(@PathVariable Long idB) {
        System.out.println("idB==============================");
        return produitBoutiqueRepository.findBoutiqueByQuartierAndCategoryK(idB);
    }
}
