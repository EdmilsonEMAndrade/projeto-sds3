package com.devsuperior.dsvendas.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.DTO.SaleDTO;
import com.devsuperior.dsvendas.DTO.SaleSumDTO;
import com.devsuperior.dsvendas.DTO.SucessDTO;
import com.devsuperior.dsvendas.Service.SaleService;

@RestController
@RequestMapping("/sale")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		List<SaleSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/sucess")
	public ResponseEntity<List<SucessDTO>> sucessGroupedBySeller(){
		List<SucessDTO> list = service.sucessGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
}
