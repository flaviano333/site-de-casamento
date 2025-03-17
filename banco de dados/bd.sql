CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb`;

CREATE TABLE IF NOT EXISTS `mydb`.`convidado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`presente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(225) NOT NULL,
  `descricao` LONGTEXT NULL,
  `imagem` VARCHAR(255) NULL,
  `comprado` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total` DECIMAL(10,2) NOT NULL,
  `status` ENUM('pendente', 'pago', 'cancelado') NOT NULL DEFAULT 'pendente',
  `data_compra` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `convidado_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_convidado1_idx` (`convidado_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_convidado1`
    FOREIGN KEY (`convidado_id`)
    REFERENCES `mydb`.`convidado` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`itens_pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade` INT NOT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `pedido_id` INT NOT NULL,
  `presente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_itens_pedido_pedido_idx` (`pedido_id` ASC) VISIBLE,
  INDEX `fk_itens_pedido_presente1_idx` (`presente_id` ASC) VISIBLE,
  CONSTRAINT `fk_itens_pedido_pedido`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `mydb`.`pedido` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_itens_pedido_presente1`
    FOREIGN KEY (`presente_id`)
    REFERENCES `mydb`.`presente` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`pagamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` ENUM('pendente', 'aprovado', 'recusado') NOT NULL DEFAULT 'pendente',
  `transaction_id` VARCHAR(255) NULL,
  `metodo_pagamento` VARCHAR(50) NULL,
  `pedido_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pagamento_pedido1_idx` (`pedido_id` ASC) VISIBLE,
  CONSTRAINT `fk_pagamento_pedido1`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `mydb`.`pedido` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;
