CREATE OR REPLACE FUNCTION TRIGGER_SET_TIMESTAMP() 
RETURNS TRIGGER AS $$ 
	$$ BEGIN NEW.updated_at := NOW();
	RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;


CREATE TABLE
    IF NOT EXISTS users (
        id VARCHAR (50) PRIMARY KEY,
        dni VARCHAR(25) UNIQUE NOT NULL,
        name VARCHAR (255) NOT NULL,
        email VARCHAR (255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW (),
        updated_at TIMESTAMPTZ
    );

CREATE TRIGGER SET_TIMESTAMP 
	set_timestamp BEFORE
	UPDATE ON users FOR EACH ROW
	EXECUTE
	    FUNCTION trigger_set_timestamp();
