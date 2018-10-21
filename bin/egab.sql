CREATE SEQUENCE seq_usuario;
CREATE SEQUENCE seq_telefone;

CREATE TABLE "EGAB"."USUARIO"
  (
    "SEQ_USUARIO" NUMBER(19,0) NOT NULL ENABLE,
    "EMAIL"       VARCHAR2(255 BYTE) NOT NULL ENABLE,
    "NOME"        VARCHAR2(255 BYTE) NOT NULL ENABLE,
    "SENHA"       VARCHAR2(255 BYTE) NOT NULL ENABLE,
    "SITUACAO"    CHAR(1 BYTE) NOT NULL ENABLE,
    "SOBRENOME"   VARCHAR2(255 BYTE) NOT NULL ENABLE,
    PRIMARY KEY ("SEQ_USUARIO")
  )
  
  

CREATE TABLE "EGAB"."TELEFONE"
  (
    "SEQ_USUARIO"  NUMBER NOT NULL ENABLE,
    "DDD"          NUMBER NOT NULL ENABLE,
    "TELEFONE"     NUMBER NOT NULL ENABLE,
    "SEQ_TELEFONE" NUMBER NOT NULL ENABLE,
    CONSTRAINT "TELEFONE_PK" PRIMARY KEY ("SEQ_USUARIO"),
    CONSTRAINT "TELEFONE_FK1" FOREIGN KEY ("SEQ_USUARIO") REFERENCES "EGAB"."USUARIO" ("SEQ_USUARIO") ENABLE
  )
  
  
insert into usuario(seq_usuario, nome, sobrenome, email, senha, situacao) values(seq_usuario.nextval, 'Pedro', 'Souza', 'pedro@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1);
insert into usuario(seq_usuario, nome, sobrenome, email, senha, situacao) values(seq_usuario.nextval, 'João', 'Paulo', 'joao@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1);

INSERT INTO telefone(seq_telefone, seq_usuario, ddd, telefone) VALUES(seq_telefone.nextval,63, 61, 33333333)