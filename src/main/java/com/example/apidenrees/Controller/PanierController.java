package com.example.apidenrees.Controller;


import com.example.apidenrees.Model.Panier;
import com.example.apidenrees.ServiceImpl.PanierServiceImpl;
import com.example.apidenrees.Services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/Panier")
@RestController
public class PanierController {
    @Autowired
    PanierService panierService;

    @Autowired
    PanierServiceImpl panierServiceImpl;

    @GetMapping("/listPanier")
    public List<Panier>  getListPanier() {
        return panierService.listPanier();
    }

    @PostMapping("/addPanier")
    public void panierList(@RequestBody Panier panier){
        this.panierService.ajout_panier(panier);

    }
    @GetMapping("/desactiverPanier/{id}")
    public void desactiverPanier(@PathVariable("id") Long id) {
        this.panierServiceImpl.desactiverPanier(id);
    }

    @GetMapping("/activerPanier/{id}")
    public void activerPanier(@PathVariable("id") Long id) {
        this.panierServiceImpl.activerPanier(id);
    }
}
