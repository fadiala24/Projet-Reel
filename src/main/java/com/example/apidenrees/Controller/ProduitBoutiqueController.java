package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Repositories.ProduitBoutiqueRepository;
import com.example.apidenrees.ServiceImpl.ProduitBoutiqueServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProduitBoutiqueController {
    @Autowired
    ProduitBoutiqueServiceImpl produitBoutiqueServiceImpl;

    @Autowired
    ProduitBoutiqueRepository produitBoutiqueRepository;

    // *********************************** Affichage de la boutique par quartier et category ********************
    @GetMapping("/getBoutiqueByQuartierCategory/{idB}")
    public List<ProduitBoutique> findBoutiqueByQuartierAndCategory(@PathVariable("idB") Long idB) {
        System.out.println("idB");
        return produitBoutiqueRepository.findBoutiqueByQuartierAndCategoryK(idB);
    }

}
