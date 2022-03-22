package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Localite;
import com.example.apidenrees.Repositories.BoutiqueRepository;
import com.example.apidenrees.ServiceImpl.BoutiqueServiceImpl;
import com.example.apidenrees.Services.BoutiqueService;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Boutique")
public class BoutiqueController {
    @Autowired
    BoutiqueService boutiqueService;
    @Autowired
    BoutiqueRepository boutiqueRepository;

    @Autowired
    BoutiqueServiceImpl boutiqueServiceImpl;
    // ***************  Ajout d'un Boutique ***************

    @PostMapping("/addBoutique")
    public Boutiques saveBoutique(Boutiques boutiques, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        return boutiqueService.aujout_boutique(boutiques, multipartFile);
    }
    @PostMapping("/validBoutique")
    public String ValidBoutique(@RequestBody Boutiques boutiques){
        return boutiqueService.validBoutique(boutiques);
    }
    // ******************** Liste des Boutiques

    @DeleteMapping("/restoreBoutique/{id}&{idBoutique}")
    public  String restoreBoutique(@PathVariable("id") Long id, @PathVariable("idBoutique") Long idSuperBoutique){
        return boutiqueServiceImpl.restoreBoutique(id, idSuperBoutique);
    }
    @GetMapping("/listBoutique")
    List<Boutiques> listBoutique() {
        return this.boutiqueServiceImpl.listBoutique();
    }

    // ************************* Affichage par Boutique *****************

    @GetMapping("/infoBoutique/{id}")
    public Boutiques getBoutiqueById(@PathVariable Long id) {
        return this.boutiqueServiceImpl.getBoutiqueById(id);
    }
        @GetMapping("/BoutiqueById/{id}")
        public List<Boutiques> getBoutiqueByBoutiquierId(@PathVariable Long id){
        return boutiqueRepository.findBoutiquesByBoutiquier(id);
        }
    @GetMapping("/desactiverBoutique/{id}")
    public void desactiverBoutique(@PathVariable("id") Long id) {
        this.boutiqueServiceImpl.desactiverBoutique(id);
    }

    // ************************* Suppression de Boutique ***************

    @DeleteMapping("/deleteBoutique/{id}")
    public String delete(@PathVariable Long id) {
        return this.boutiqueServiceImpl.supprimer_boutique(id);
    }

    // ************************  Modification de Boutique ***************
    @PutMapping("/updateBoutique/{id}")
    public String updateBoutique(@PathVariable Long id, @RequestBody Boutiques boutiques) {
        return this.boutiqueServiceImpl.modifier_boutique(boutiques, id);
    }

    // ****************************** Affichage de la boutique par quartier ********************

    @GetMapping("/listBoutiqueQuartier/{id}")
    List<Boutiques> boutiquesList(@PathVariable("id") Long id){
        return boutiqueRepository.findByQuartierK(id);
    }

    // *********************************** Affichage de la boutique ville ********************

    @GetMapping("/listBoutiqueVille/{id}")
    List<Boutiques> boutiquesVille(@PathVariable("id") Long id){
        return boutiqueRepository.findBoutiquesByVille(id);
    }


    @GetMapping(value = "addPhoto/{idBoutic}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] getpHOTO(@PathVariable("idBoutic") Long Id) throws IOException {
        return boutiqueServiceImpl.getpHOTO(Id);
    }

    @GetMapping("/nombreBoutique")
    public Integer nombreBoutique(){
        return boutiqueRepository.nombreBoutique();
    }

}
